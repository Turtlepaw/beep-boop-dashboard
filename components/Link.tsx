interface SVGProps {
    size?: "small" | "medium" | "large" | "semiLarge" | "semiMedium" | "reallyLarge" | "superLarge" | "guildIcon";
    color?: string;
    className?: string;
}

export function ExternalIcon(props?: SVGProps) {
    return (
        <svg className={`icon outbound svg-${props?.size} ${props?.className == null ? "" : props.className}`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
            <path fill={props?.color || "currentColor"} d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
            <polygon fill={props?.color || "currentColor"} points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
        </svg>
    );
}

export function Link(props: {
    href: string;
    className?: string;
    children: React.ReactNode;
    isExternal?: boolean;
}) {
    let icon: React.ReactNode;
    if(props.isExternal || (props.href.startsWith('http') || props.href.startsWith('https'))) {
        icon = <ExternalIcon />
    }
    return (
        <a href={props.href} className={`LinkHref underline text-blue-500 ${props.className}`}>
            {props.children}
            {icon}
        </a>
    );
}