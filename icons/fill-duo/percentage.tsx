import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Percentage({
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
          d="M2 5C2 3.34279 3.34279 2 5 2C6.65721 2 8 3.34279 8 5C8 6.65721 6.65721 8 5 8C3.34279 8 2 6.65721 2 5ZM5 3.5C4.17121 3.5 3.5 4.17121 3.5 5C3.5 5.82879 4.17121 6.5 5 6.5C5.82879 6.5 6.5 5.82879 6.5 5C6.5 4.17121 5.82879 3.5 5 3.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10 13C10 11.3428 11.3428 10 13 10C14.6572 10 16 11.3428 16 13C16 14.6572 14.6572 16 13 16C11.3428 16 10 14.6572 10 13ZM13 11.5C12.1712 11.5 11.5 12.1712 11.5 13C11.5 13.8288 12.1712 14.5 13 14.5C13.8288 14.5 14.5 13.8288 14.5 13C14.5 12.1712 13.8288 11.5 13 11.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.6717 2.12982C14.0142 2.36273 14.1031 2.82922 13.8701 3.17174L5.37015 15.6717C5.13723 16.0143 4.67074 16.1031 4.32822 15.8702C3.98569 15.6373 3.89684 15.1708 4.12976 14.8283L12.6298 2.32828C12.8627 1.98576 13.3292 1.8969 13.6717 2.12982Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Percentage;
