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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import styles from './SpfxReactRouter.module.scss';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
var SpfxCustomers = /** @class */ (function (_super) {
    __extends(SpfxCustomers, _super);
    function SpfxCustomers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxCustomers.prototype.componentDidMount = function () {
        this._getLinks();
    };
    SpfxCustomers.prototype._getPolicyLinks = function () {
        var isCheckedOut = 'Checked Out To';
        // This legacyPageContext is not recommended to be used.
        // console.log(this.props.context.pageContext.legacyPageContext.userId);
        if (isCheckedOut) {
            // Filter by cultureInfo 
            //const web = Web("https://asmurph.sharepoint.com");
            //const list: IList = web.('SitePages');
            // const listData = list();
            // Filter by cultureInfo 
            return sp.web.lists.getByTitle('Policies').items
                .select('Title')
                .get();
        }
    };
    SpfxCustomers.prototype._getLinks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allItems, linkgroupcol, linkcol;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.getByTitle("sitepages").items.getAll()];
                    case 1:
                        allItems = _a.sent();
                        linkgroupcol = [{ links: [] }];
                        linkcol = linkgroupcol[0].links;
                        allItems.forEach(function (v, i) {
                            if (v["ParentId"] == null) {
                                linkcol.push({ name: v["Title"], url: v["url"], links: [], key: v.Id + '', isExpanded: true, target: '_blank' });
                            }
                            else {
                                var link = { key: v.Id + '', name: v["Title"], url: v["url"], links: [], target: '_blank' };
                                var treecol = linkcol.filter(function (value) { return value.key == v["ParentId"]; });
                                if (treecol.length != 0) {
                                    treecol[0].links.push(link);
                                }
                            }
                        });
                        console.log(linkgroupcol);
                        this.setState({ links: linkgroupcol });
                        return [2 /*return*/];
                }
            });
        });
    };
    SpfxCustomers.prototype.render = function () {
        return (React.createElement("div", { className: styles.spfxReactRouter },
            React.createElement("h1", null, "All Pages Checked Out"),
            React.createElement("h1", null,
                React.createElement("a", { href: "#/Customer/153" }, "Customer 153")),
            React.createElement("h1", null,
                React.createElement("a", { href: "#/Customer/154" }, "Customer 153")),
            React.createElement("h1", null,
                React.createElement("a", { href: "#/Customer/155" }, "Customer 153")),
            React.createElement("h1", null,
                React.createElement("a", { href: "#/Customer/156" }, "Customer 153"))));
    };
    return SpfxCustomers;
}(React.Component));
export default SpfxCustomers;
//# sourceMappingURL=SpfxCustomers.js.map