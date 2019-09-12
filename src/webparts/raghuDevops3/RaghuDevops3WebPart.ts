import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'RaghuDevops3WebPartStrings';
import RaghuDevops3 from './components/RaghuDevops3';
import { IRaghuDevops3Props } from './components/IRaghuDevops3Props';

export interface IRaghuDevops3WebPartProps {
  description: string;
}

export default class RaghuDevops3WebPart extends BaseClientSideWebPart<IRaghuDevops3WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IRaghuDevops3Props > = React.createElement(
      RaghuDevops3,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
