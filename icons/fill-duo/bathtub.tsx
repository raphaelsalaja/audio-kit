import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bathtub({
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
          d="M3.5 4C3.5 2.34279 4.84279 1 6.5 1C8.15721 1 9.5 2.34279 9.5 4C9.5 4.41421 9.16421 4.75 8.75 4.75C8.33579 4.75 8 4.41421 8 4C8 3.17121 7.32879 2.5 6.5 2.5C5.67121 2.5 5 3.17121 5 4V8.75C5 9.16421 4.66421 9.5 4.25 9.5C3.83579 9.5 3.5 9.16421 3.5 8.75V4Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 8.75C2 8.33579 2.33579 8 2.75 8H15.25C15.6642 8 16 8.33579 16 8.75V11.25C16 13.3212 14.3212 15 12.25 15H5.75C3.67879 15 2 13.3212 2 11.25V8.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 8.75C1 8.33579 1.33579 8 1.75 8H16.25C16.6642 8 17 8.33579 17 8.75C17 9.16421 16.6642 9.5 16.25 9.5H1.75C1.33579 9.5 1 9.16421 1 8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 15V16.25C11.5 16.6642 11.8358 17 12.25 17C12.6642 17 13 16.6642 13 16.25V14.925C12.7577 14.9742 12.5069 15 12.25 15H11.5Z"
          fill={fill}
        />
        <path
          d="M5 14.925V16.25C5 16.6642 5.33579 17 5.75 17C6.16421 17 6.5 16.6642 6.5 16.25V15H5.75C5.49315 15 5.24233 14.9742 5 14.925Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Bathtub;
