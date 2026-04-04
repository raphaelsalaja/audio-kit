import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bomb({
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
          d="M13.5 7.157C13.244 6.722 12.857 6.164 12.288 5.606C11.769 5.097 11.255 4.742 10.843 4.5L9.51 5.833C8.751 5.463 7.901 5.25 7 5.25C3.824 5.25 1.25 7.824 1.25 11C1.25 14.176 3.824 16.75 7 16.75C10.176 16.75 12.75 14.176 12.75 11C12.75 10.099 12.537 9.249 12.167 8.49C12.701 7.957 12.966 7.691 13.5 7.157Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.341 5.659L14 4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 2.25L16.5 1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 1.75V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 5.75H17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 7.157C13.244 6.722 12.857 6.164 12.288 5.606C11.769 5.097 11.255 4.742 10.843 4.5L9.51 5.833C8.751 5.463 7.901 5.25 7 5.25C3.824 5.25 1.25 7.824 1.25 11C1.25 14.176 3.824 16.75 7 16.75C10.176 16.75 12.75 14.176 12.75 11C12.75 10.099 12.537 9.249 12.167 8.49C12.701 7.957 12.966 7.691 13.5 7.157Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Bomb;
