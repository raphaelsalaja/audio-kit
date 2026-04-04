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
          fillRule="evenodd"
        />
        <path
          d="M5.8069 9.73522C6.00997 9.3742 6.46726 9.24616 6.82828 9.44924L10.9074 11.7437C11.2684 11.9468 11.3964 12.4041 11.1934 12.7651C10.9903 13.1261 10.533 13.2542 10.172 13.0511L6.09289 10.7566C5.73187 10.5535 5.60383 10.0962 5.8069 9.73522Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 9C1.5 7.34279 2.84279 6 4.5 6C6.15721 6 7.5 7.34279 7.5 9C7.5 10.6572 6.15721 12 4.5 12C2.84279 12 1.5 10.6572 1.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.5 4.5C9.5 2.84279 10.8428 1.5 12.5 1.5C14.1572 1.5 15.5 2.84279 15.5 4.5C15.5 6.15721 14.1572 7.5 12.5 7.5C10.8428 7.5 9.5 6.15721 9.5 4.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.5 13.5C9.5 11.8428 10.8428 10.5 12.5 10.5C14.1572 10.5 15.5 11.8428 15.5 13.5C15.5 15.1572 14.1572 16.5 12.5 16.5C10.8428 16.5 9.5 15.1572 9.5 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ConnectedDots3;
