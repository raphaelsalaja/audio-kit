import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SearchContent({
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
          d="M1 14.75C1 14.3358 1.33579 14 1.75 14H12.25C12.6642 14 13 14.3358 13 14.75C13 15.1642 12.6642 15.5 12.25 15.5H1.75C1.33579 15.5 1 15.1642 1 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 10.75C1 10.3358 1.33579 10 1.75 10H5.25C5.66421 10 6 10.3358 6 10.75C6 11.1642 5.66421 11.5 5.25 11.5H1.75C1.33579 11.5 1 11.1642 1 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 6.75C1 6.33579 1.33579 6 1.75 6H5.25C5.66421 6 6 6.33579 6 6.75C6 7.16421 5.66421 7.5 5.25 7.5H1.75C1.33579 7.5 1 7.16421 1 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 2.75C1 2.33579 1.33579 2 1.75 2H12.25C12.6642 2 13 2.33579 13 2.75C13 3.16421 12.6642 3.5 12.25 3.5H1.75C1.33579 3.5 1 3.16421 1 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.25 5C9.17877 5 7.5 6.6789 7.5 8.75C7.5 10.8211 9.17877 12.5 11.25 12.5C12.0143 12.5 12.7252 12.2714 13.3181 11.8787L15.7197 14.2803C16.0126 14.5732 16.4874 14.5732 16.7803 14.2803C17.0732 13.9874 17.0732 13.5126 16.7803 13.2197L14.3787 10.8181C14.7714 10.2253 15 9.51434 15 8.75C15 6.6789 13.3212 5 11.25 5ZM9 8.75C9 7.5073 10.0072 6.5 11.25 6.5C12.4928 6.5 13.5 7.5073 13.5 8.75C13.5 9.9927 12.4928 11 11.25 11C10.0072 11 9 9.9927 9 8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SearchContent;
