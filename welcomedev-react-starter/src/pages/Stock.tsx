import React, { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// components
import PageTitle from "../components/PageTitle";

// constants
import { APP_TITLE, PAGE_TITLE_STOCK } from '../utils/constants';

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
    })
);

const Stock: FC<{}> = (): ReactElement => {
    const classes = useStyles();
    return (
        <>
            <Helmet>
                <title>{} | {APP_TITLE}</title>
            </Helmet>
            <div className={classes.root}>
                <PageTitle title={PAGE_TITLE_STOCK} />
            </div>
        </>
    )
}

export default Stock;