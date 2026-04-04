import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ConnectedDots3({
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
          d="M11.1934 5.23491C11.3964 5.59593 11.2684 6.05322 10.9074 6.25629L6.82828 8.55079C6.46726 8.75387 6.00997 8.62583 5.8069 8.26481C5.60383 7.90379 5.73187 7.4465 6.09289 7.24343L10.172 4.94893C10.533 4.74586 10.9903 4.8739 11.1934 5.23491Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.8069 9.73519C6.00997 9.37417 6.46726 9.24613 6.82828 9.4492L10.9074 11.7437C11.2684 11.9468 11.3964 12.4041 11.1934 12.7651C10.9903 13.1261 10.533 13.2541 10.172 13.0511L6.09289 10.7566C5.73187 10.5535 5.60383 10.0962 5.8069 9.73519Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.25 6.25C2.73089 6.25 1.5 7.48089 1.5 9C1.5 10.5191 2.73089 11.75 4.25 11.75C5.76911 11.75 7 10.5191 7 9C7 7.48089 5.76911 6.25 4.25 6.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.75 1.75C11.2309 1.75 10 2.98089 10 4.5C10 6.01911 11.2309 7.25 12.75 7.25C14.2691 7.25 15.5 6.01911 15.5 4.5C15.5 2.98089 14.2691 1.75 12.75 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.75 10.75C11.2309 10.75 10 11.9809 10 13.5C10 15.0191 11.2309 16.25 12.75 16.25C14.2691 16.25 15.5 15.0191 15.5 13.5C15.5 11.9809 14.2691 10.75 12.75 10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ConnectedDots3;
