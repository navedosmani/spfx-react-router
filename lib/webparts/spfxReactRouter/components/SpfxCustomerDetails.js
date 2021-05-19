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
var SpfxCustomerDetails = /** @class */ (function (_super) {
    __extends(SpfxCustomerDetails, _super);
    function SpfxCustomerDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxCustomerDetails.prototype.render = function () {
        return (React.createElement("div", { className: styles.spfxReactRouter },
            React.createElement("h1", null,
                "Selected Customer Id is ",
                React.createElement("span", { style: { color: 'green' } }, this.props["match"]["params"]["id"]))));
    };
    return SpfxCustomerDetails;
}(React.Component));
export default SpfxCustomerDetails;
//# sourceMappingURL=SpfxCustomerDetails.js.map