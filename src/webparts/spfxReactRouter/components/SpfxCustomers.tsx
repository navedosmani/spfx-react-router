import * as React from 'react';
import styles from './SpfxReactRouter.module.scss';
import { ISpfxReactRouterProps } from './ISpfxReactRouterProps';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { Web } from '@pnp/sp/webs';
import { IList } from '@pnp/sp/lists';


import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';

export default class SpfxCustomers extends React.Component<ISpfxReactRouterProps, {}> {

  public componentDidMount() { 
    this._getLinks();
}
  private _getPolicyLinks () {
  const isCheckedOut = 'Checked Out To';
    // This legacyPageContext is not recommended to be used.
   // console.log(this.props.context.pageContext.legacyPageContext.userId);
  if(isCheckedOut)
    {
      // Filter by cultureInfo 
      //const web = Web("https://asmurph.sharepoint.com");
      //const list: IList = web.('SitePages');
     // const listData = list();
        // Filter by cultureInfo 
        return sp.web.lists.getByTitle('Policies').items

        .select('Title')
        .get();
    
    }
  }

  private async _getLinks() {
    const allItems: any[] = await sp.web.lists.getByTitle("sitepages").items.getAll();
    const linkgroupcol: INavLinkGroup[] = [{ links: [] }];
    let linkcol: INavLink[] = linkgroupcol[0].links;
    allItems.forEach(function (v, i) {
      if (v["ParentId"] == null) {
        linkcol.push({ name: v["Title"], url: v["url"], links: [], key: v.Id + '', isExpanded: true, target: '_blank' });
      }
      else {
        const link: INavLink = { key: v.Id + '', name: v["Title"], url: v["url"], links: [], target: '_blank' };
        var treecol: INavLink[] = linkcol.filter(function (value) { return value.key == v["ParentId"]; });
        if (treecol.length != 0) {
          treecol[0].links.push(link);
        }
      }
    });
    console.log(linkgroupcol);
    this.setState({ links: linkgroupcol });
  }
  public render(): React.ReactElement<ISpfxReactRouterProps> {
    return (
      <div className={ styles.spfxReactRouter }>
          <h1>All Pages Checked Out</h1>
          <h1><a href="#/Customer/153">Customer 153</a></h1>
          <h1><a href="#/Customer/154">Customer 153</a></h1>
          <h1><a href="#/Customer/155">Customer 153</a></h1>
          <h1><a href="#/Customer/156">Customer 153</a></h1>
      </div>
    );
  }
}
