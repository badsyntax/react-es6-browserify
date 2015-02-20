import React from 'react';
import ReactCanvas from 'react-canvas';
import {Item} from './Item.react.jsx';

var Surface = ReactCanvas.Surface;
var ListView = ReactCanvas.ListView;
var Image = ReactCanvas.Image;
var Text = ReactCanvas.Text;

var article = {

};

export class Canvas extends React.Component {

  render() {
    var surfaceWidth = window.innerWidth;
    var surfaceHeight = window.innerHeight;
    var imageStyle = this.getImageStyle();
    var textStyle = this.getTextStyle();

    return (
      <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
        <ListView
          style={this.getListViewStyle()}
          numberOfItemsGetter={this.getNumberOfItems}
          itemHeightGetter={Item.getItemHeight}
          itemGetter={this.renderItem.bind(this)} />
      </Surface>
    );
  }

  renderItem(itemIndex, scrollTop) {
    return (
      <Item
        width={this.getSize().width}
        height={Item.getItemHeight()}
        imageUrl={article.imageUrl}
        title={article.title}
        itemIndex={itemIndex} />
    );
  }

  getSize () {
    return document.getElementById('main').getBoundingClientRect();
  }

  getListViewStyle () {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  getNumberOfItems () {
    return 1000;
  }

  getImageHeight() {
    return Math.round(window.innerHeight / 2);
  }

  getImageStyle() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: this.getImageHeight()
    };
  }

  getTextStyle() {
    return {
      top: this.getImageHeight() + 10,
      left: 0,
      width: window.innerWidth,
      height: 20,
      lineHeight: 20,
      fontSize: 12
    };
  }
}
