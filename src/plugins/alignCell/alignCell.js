/*
 * Plugin used to align cell in Handsontable
 * @constructor
 */

function AlignCell() {
}

/*
 * @param TD
 */

AlignCell.prototype.alignHorizontal = function (TD) {
    //object.style.textAlign="left|right|center|justify|initial|inherit"
    TD.style.textAlign = "center";
};

AlignCell.prototype.alignVertical = function (TD) {
    //http://www.w3schools.com/jsref/prop_style_verticalalign.asp
    TD.style.verticalAlign = "middle";
};

var init = function () {
    var instance = this;
    instance.alignCell = new AlignCell();
};

var addAlignActionsToContextMenu = function (defaultOptions) {
    defaultOptions.items.alignCellSeparator = Handsontable.ContextMenu.SEPARATOR;
    defaultOptions.items.horizontalAlign = {
        name: function () {
            return 'align center';
        },
        callback: function () {
            var cell = this.getSelected(),
                td = this.getCell(cell[0], cell[1]);

            this.alignCell.alignHorizontal(td);
        },
        disabled: function () {
            return false;
        }
    };
    defaultOptions.items.verticalAlign = {
        name: 'align middle',
        callback: function () {
            var cell = this.getSelected(),
                td = this.getCell(cell[0], cell[1]);

            this.alignCell.alignVertical(td);
        },
        disabled: function () {
            return false;
        }
    };
};



Handsontable.hooks.add('beforeInit', init);
Handsontable.hooks.add('afterContextMenuDefaultOptions', addAlignActionsToContextMenu);
Handsontable.AlignCell = AlignCell;