import * as React from 'react';
import {
  BaseComponent,
  css
} from '../../Utilities';
import { LayerBase } from './Layer.base';
import { ILayerHostProps } from './LayerHost.types';

export class LayerHost extends BaseComponent<ILayerHostProps, {}> {

  public shouldComponentUpdate() {
    return false;
  }

  public componentDidMount() {
    LayerBase.notifyHostChanged(this.props.id!);
  }

  public componentWillUnmount() {
    LayerBase.notifyHostChanged(this.props.id!);
  }

  public render() {
    return (
      <div { ...this.props } className={ css('ms-LayerHost', this.props.className) } />
    );
  }
}