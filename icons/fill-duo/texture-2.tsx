import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Texture2({
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
          d="M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V7.75C3.5 8.16421 3.16421 8.5 2.75 8.5C2.33579 8.5 2 8.16421 2 7.75V2.75C2 2.33579 2.33579 2 2.75 2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.25 2C5.66421 2 6 2.33579 6 2.75V7.75C6 8.16421 5.66421 8.5 5.25 8.5C4.83579 8.5 4.5 8.16421 4.5 7.75V2.75C4.5 2.33579 4.83579 2 5.25 2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V7.75C8.5 8.16421 8.16421 8.5 7.75 8.5C7.33579 8.5 7 8.16421 7 7.75V2.75C7 2.33579 7.33579 2 7.75 2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.5 2.75C9.5 2.33579 9.83579 2 10.25 2H15.25C15.6642 2 16 2.33579 16 2.75C16 3.16421 15.6642 3.5 15.25 3.5H10.25C9.83579 3.5 9.5 3.16421 9.5 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.5 5.25C9.5 4.83579 9.83579 4.5 10.25 4.5H15.25C15.6642 4.5 16 4.83579 16 5.25C16 5.66421 15.6642 6 15.25 6H10.25C9.83579 6 9.5 5.66421 9.5 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.5 7.75C9.5 7.33579 9.83579 7 10.25 7H15.25C15.6642 7 16 7.33579 16 7.75C16 8.16421 15.6642 8.5 15.25 8.5H10.25C9.83579 8.5 9.5 8.16421 9.5 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.25 9.5C15.6642 9.5 16 9.83579 16 10.25V15.25C16 15.6642 15.6642 16 15.25 16C14.8358 16 14.5 15.6642 14.5 15.25V10.25C14.5 9.83579 14.8358 9.5 15.25 9.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.75 9.5C13.1642 9.5 13.5 9.83579 13.5 10.25V15.25C13.5 15.6642 13.1642 16 12.75 16C12.3358 16 12 15.6642 12 15.25V10.25C12 9.83579 12.3358 9.5 12.75 9.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.25 9.5C10.6642 9.5 11 9.83579 11 10.25V15.25C11 15.6642 10.6642 16 10.25 16C9.83579 16 9.5 15.6642 9.5 15.25V10.25C9.5 9.83579 9.83579 9.5 10.25 9.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 10.25C2 9.83579 2.33579 9.5 2.75 9.5H7.75C8.16421 9.5 8.5 9.83579 8.5 10.25C8.5 10.6642 8.16421 11 7.75 11H2.75C2.33579 11 2 10.6642 2 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 12.75C2 12.3358 2.33579 12 2.75 12H7.75C8.16421 12 8.5 12.3358 8.5 12.75C8.5 13.1642 8.16421 13.5 7.75 13.5H2.75C2.33579 13.5 2 13.1642 2 12.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 15.25C2 14.8358 2.33579 14.5 2.75 14.5H7.75C8.16421 14.5 8.5 14.8358 8.5 15.25C8.5 15.6642 8.16421 16 7.75 16H2.75C2.33579 16 2 15.6642 2 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Texture2;
