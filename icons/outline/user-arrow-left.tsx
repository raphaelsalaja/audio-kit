import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserArrowLeft({
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
          d="M9 7.25049C10.5188 7.25049 11.75 6.01929 11.75 4.50049C11.75 2.98169 10.5188 1.75049 9 1.75049C7.4812 1.75049 6.25 2.98169 6.25 4.50049C6.25 6.01929 7.4812 7.25049 9 7.25049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 10.2505L11.75 12.7505L14.25 15.2505"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.3413 9.91698C9.90759 9.81958 9.46369 9.75049 8.99999 9.75049C6.44899 9.75049 4.26099 11.2805 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5154C5.46299 15.9014 7.08389 16.2495 8.99999 16.2495C9.66989 16.2495 10.2872 16.1951 10.8792 16.1218"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 12.7505H16.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default UserArrowLeft;
