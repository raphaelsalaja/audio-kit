import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShieldKey({
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
          d="M7.75 9.25C7.75 7.73122 8.98122 6.5 10.5 6.5C11.7588 6.5 12.82 7.34575 13.1465 8.5H17C17.4142 8.5 17.75 8.83579 17.75 9.25C17.75 9.66421 17.4142 10 17 10H16.25V10.75C16.25 11.1642 15.9142 11.5 15.5 11.5C15.0858 11.5 14.75 11.1642 14.75 10.75V10H13.1465C12.82 11.1543 11.7588 12 10.5 12C8.98122 12 7.75 10.7688 7.75 9.25ZM10.5 8C9.80964 8 9.25 8.55964 9.25 9.25C9.25 9.94038 9.80964 10.5 10.5 10.5C11.1904 10.5 11.75 9.94039 11.75 9.25C11.75 8.55964 11.1904 8 10.5 8Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M14.783 2.813L9.533 1.133C9.184 1.021 8.815 1.022 8.467 1.133L3.216 2.813C2.488 3.046 2 3.716 2 4.48V11C2 14.508 6.946 16.379 8.46 16.869C8.637 16.926 8.818 16.955 9 16.955C9.182 16.955 9.362 16.927 9.538 16.87C10.7353 16.483 14.0721 15.2346 15.4221 12.9987C14.7051 12.9743 14.0732 12.6144 13.6784 12.071C12.9004 12.9474 11.7656 13.5 10.5 13.5C8.15281 13.5 6.25 11.5973 6.25 9.25C6.25 6.90279 8.15279 5 10.5 5C12.0222 5 13.3553 5.79946 14.1058 7H16V4.48C16 3.716 15.511 3.046 14.783 2.813Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShieldKey;
