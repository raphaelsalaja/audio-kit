import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bullhorn({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M13.9928 1.0404C14.2962 1.14421 14.5 1.42938 14.5 1.75V13.25C14.5 13.5707 14.2961 13.8559 13.9927 13.9596C13.6897 14.0633 13.3544 13.9631 13.1579 13.7103L13.1571 13.7094C12.8251 13.2933 12.4342 12.9173 12.021 12.5833C11.2941 11.9959 10.3992 11.5 9.5 11.5H5C2.79079 11.5 1 9.70922 1 7.5C1 5.29079 2.79079 3.5 5 3.5H9.5C10.3986 3.5 11.2935 3.00417 12.0206 2.41664C12.5486 1.99001 12.9365 1.55507 13.0883 1.37461C13.3178 1.10177 13.6232 0.913921 13.9928 1.0404Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.14069 11.5L6.11812 16.1716C6.31746 17.1176 7.245 17.7208 8.18852 17.5235L8.63573 17.433L8.64148 17.4318C9.58859 17.2322 10.1921 16.3025 9.99263 15.3578L9.1774 11.5H5.14069Z"
          fill={fill}
        />
        <path
          d="M16.3715 5.52744C16.6421 5.40696 16.9582 5.45703 17.1784 5.65523C17.6817 6.10843 18 6.76754 18 7.50001C18 8.23247 17.6817 8.89158 17.1784 9.34478C16.9582 9.54298 16.6421 9.59305 16.3715 9.47257C16.1009 9.35208 15.9265 9.08362 15.9265 8.78741V6.2126C15.9265 5.91639 16.1009 5.64793 16.3715 5.52744Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 11.374C2.27473 10.93 1 9.36391 1 7.5C1 5.63609 2.27473 4.07003 4 3.62601V11.374Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Bullhorn;
