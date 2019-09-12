import * as React from 'react';
import styles from './RaghuDevops3.module.scss';
import { IRaghuDevops3Props } from './IRaghuDevops3Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class RaghuDevops3 extends React.Component<IRaghuDevops3Props, {}> {
  public render(): React.ReactElement<IRaghuDevops3Props> {
    return (
      <div className={ styles.raghuDevops3 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Raghu its working super</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
