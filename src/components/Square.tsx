import React from 'react';
import Layout from './General/Layout';
import Styles from './Square.module.css';

interface Props {
    value: string,
    onClick: any;
}


export default function Square(props: Props) {
    console.log(props.onClick);
    return (
        <Layout>
            <button className={Styles.square} onClick={props.onClick}>
                {props.value}
            </button>
        </Layout>
    )

}
