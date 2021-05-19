var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './SpfxReactRouter.module.scss';
import SpfxCustomersFiles from './SpfxCustomersFiles';
import SpfxCustomers from './SpfxCustomers';
import SpfxCustomerDetails from './SpfxCustomerDetails';
import { HashRouter, Route } from "react-router-dom";
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
var navStyles = { root: { width: 300 } };
var stackTokens = { childrenGap: 40 };
var navLinkGroups = [
    {
        name: 'React Components',
        links: [
            {
                key: 'Customers',
                name: 'All Checked Out Pages',
                url: '#/',
            },
            {
                key: 'CustomerDetails',
                name: 'Pages Waiting For Approval',
                url: '#/Customer/153',
            },
            {
                key: 'Customerfiles',
                name: 'Pages Modified By A Specific Person',
                url: '#/CustomerFiles',
            },
        ],
    }
];
var SpfxReactRouter = /** @class */ (function (_super) {
    __extends(SpfxReactRouter, _super);
    function SpfxReactRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxReactRouter.prototype.render = function () {
        return (React.createElement("div", { className: styles.spfxReactRouter },
            React.createElement(Stack, { horizontal: true, tokens: stackTokens },
                React.createElement(Nav, { styles: navStyles, ariaLabel: "Nav example similiar to one found in this demo page", groups: navLinkGroups }),
                React.createElement(HashRouter, null,
                    React.createElement(Route, { path: "/", exact: true, component: SpfxCustomers }),
                    React.createElement(Route, { path: "/Customer/:id", component: SpfxCustomerDetails }),
                    React.createElement(Route, { path: "/CustomerFiles/", component: SpfxCustomersFiles })))));
    };
    return SpfxReactRouter;
}(React.Component));
export default SpfxReactRouter;
//# sourceMappingURL=SpfxReactRouter.js.map