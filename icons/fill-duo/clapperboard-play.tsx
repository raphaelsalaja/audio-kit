import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClapperboardPlay({
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
          d="M17 6V13.25C17 14.7687 15.7693 16 14.25 16H3.75C2.23069 16 1 14.7687 1 13.25V6H17Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path d="M7.53706 6H4.46432L6.46727 2H9.54266L7.53706 6Z" fill={fill} />
        <path
          d="M13.9634 5.99999H17V4.74999C17 3.78127 16.4996 2.92981 15.743 2.43996L13.9634 5.99999Z"
          fill={fill}
        />
        <path
          d="M14.2859 2.00023C14.2739 2.00008 14.262 2 14.25 2H11.2207L9.21506 6H12.2864L14.2859 2.00023Z"
          fill={fill}
        />
        <path
          d="M3.75 2H4.78973L2.78678 6H1V4.75C1 3.23079 2.23079 2 3.75 2Z"
          fill={fill}
        />
        <path
          d="M11.3912 10.3493L8.41255 8.61104C7.89244 8.30732 7.23035 8.67128 7.23035 9.26115V11V12.7389C7.23035 13.3287 7.89244 13.6927 8.41255 13.389L11.3912 11.6507C11.8959 11.3558 11.8959 10.6442 11.3912 10.3493Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ClapperboardPlay;
