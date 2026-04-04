import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gamepad4({
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
          d="M9.5 1.75C9.5 1.33579 9.83579 1 10.25 1L12.25 1C14.3212 1 16 2.67879 16 4.75V11.25C16 13.3212 14.3212 15 12.25 15H10.25C9.83579 15 9.5 14.6642 9.5 14.25V1.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.625 8.5C6.315 8.5 6.875 7.9404 6.875 7.25C6.875 6.5596 6.315 6 5.625 6C4.935 6 4.375 6.5596 4.375 7.25C4.375 7.9404 4.935 8.5 5.625 8.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.75 14C5.164 14 5.5 13.6642 5.5 13.25C5.5 12.8358 5.164 12.5 4.75 12.5C4.336 12.5 4 12.8358 4 13.25C4 13.6642 4.336 14 4.75 14Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.25 12.5C6.664 12.5 7 12.1642 7 11.75C7 11.3358 6.664 11 6.25 11C5.836 11 5.5 11.3358 5.5 11.75C5.5 12.1642 5.836 12.5 6.25 12.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.75 3C3.67879 3 2 4.67879 2 6.75V13.25C2 15.3212 3.67879 17 5.75 17H7.75C8.16421 17 8.5 16.6642 8.5 16.25V3.75C8.5 3.33579 8.16421 3 7.75 3H5.75ZM6.875 7.25C6.875 7.9404 6.315 8.5 5.625 8.5C4.935 8.5 4.375 7.9404 4.375 7.25C4.375 6.5596 4.935 6 5.625 6C6.315 6 6.875 6.5596 6.875 7.25ZM4.75 14C5.164 14 5.5 13.6642 5.5 13.25C5.5 12.8358 5.164 12.5 4.75 12.5C4.336 12.5 4 12.8358 4 13.25C4 13.6642 4.336 14 4.75 14ZM7 11.75C7 12.1642 6.664 12.5 6.25 12.5C5.836 12.5 5.5 12.1642 5.5 11.75C5.5 11.3358 5.836 11 6.25 11C6.664 11 7 11.3358 7 11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.375 12C13.065 12 13.625 11.4404 13.625 10.75C13.625 10.0596 13.065 9.5 12.375 9.5C11.685 9.5 11.125 10.0596 11.125 10.75C11.125 11.4404 11.685 12 12.375 12Z"
          fill={fill}
        />
        <path
          d="M13.25 5.5C13.664 5.5 14 5.1642 14 4.75C14 4.3358 13.664 4 13.25 4C12.836 4 12.5 4.3358 12.5 4.75C12.5 5.1642 12.836 5.5 13.25 5.5Z"
          fill={fill}
        />
        <path
          d="M11.75 7C12.164 7 12.5 6.6642 12.5 6.25C12.5 5.8358 12.164 5.5 11.75 5.5C11.336 5.5 11 5.8358 11 6.25C11 6.6642 11.336 7 11.75 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Gamepad4;
