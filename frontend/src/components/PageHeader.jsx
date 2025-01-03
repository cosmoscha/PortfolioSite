import React from 'react';
import { styles } from '../styles/common';

const PageHeader = ({ title }) => {
    return (
        <header className={`${styles.layout.header} ${styles.components.glassEffect} ${styles.components.glassBorder}`}>
            <div className="w-[70%] mx-auto relative px-4"> {/* Changed from container to w-[70%] */}
                <div className={`${styles.typography.textBase} flex items-center justify-center`}>
                    <h1 className={styles.typography.headerPrimary}>
                        {title}
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default PageHeader;