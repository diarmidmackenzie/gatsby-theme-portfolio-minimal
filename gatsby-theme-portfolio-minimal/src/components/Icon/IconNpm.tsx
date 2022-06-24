import React from 'react';

interface IconNpmProps {
    color?: string;
}

export function IconNpm(props: IconNpmProps): React.ReactElement {
    return (
        <svg
            version="1.1"
            role="img"
            fill={props.color || 'var(--primary-color)'}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
        >
            <g>
                <path d="M31,31v450h450V31H31z M396.6,396.6h-56.2v-225H256v225H115.4V115.4h281.2V396.6z"/>
            </g>
        </svg>
    );
}