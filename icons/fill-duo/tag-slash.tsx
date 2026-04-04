import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TagSlash({
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
          d="M5.0947 12.9053L12.9052 5.0948L10.1161 2.30569C9.59659 1.78619 8.90611 1.5 8.17181 1.5H3.24989C2.28509 1.5 1.49989 2.2852 1.49989 3.25V8.17191C1.49989 8.90631 1.786 9.5967 2.3056 10.1162L5.0947 12.9053Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.4961 6.6855L6.68561 14.496L8.05569 15.8661C8.59179 16.4022 9.2959 16.6703 10 16.6703C10.7041 16.6703 11.4082 16.4022 11.9443 15.8661L15.8662 11.9442C16.9385 10.8719 16.9385 9.1278 15.8662 8.0555L14.4961 6.6855Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25 7.5C6.94036 7.5 7.5 6.94036 7.5 6.25C7.5 5.55964 6.94036 5 6.25 5C5.55964 5 5 5.55964 5 6.25C5 6.94036 5.55964 7.5 6.25 7.5Z"
          fill={fill}
        />
        <path
          d="M1.99999 16.75C1.80759 16.75 1.61619 16.6768 1.46969 16.5303C1.17669 16.2373 1.17669 15.7627 1.46969 15.4698L15.4697 1.4698C15.7627 1.1768 16.2373 1.1768 16.5302 1.4698C16.8231 1.7628 16.8232 2.2374 16.5302 2.5303L2.53019 16.5303C2.38369 16.6768 2.19239 16.75 1.99999 16.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TagSlash;
