import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserShortHair4({
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
          d="M9 12C6.21287 12 3.75882 13.4271 2.32789 15.5856C2.17525 15.8158 2.16154 16.1114 2.29221 16.3548C2.42287 16.5981 2.67676 16.75 2.953 16.75H15.047C15.3232 16.75 15.5771 16.5982 15.7078 16.3548C15.8384 16.1115 15.8248 15.816 15.6722 15.5857C14.2412 13.4259 11.787 12 9 12Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5 6.5C5 4.29093 6.79082 2.5 9 2.5C11.2092 2.5 13 4.29093 13 6.5C13 8.70907 11.2092 10.5 9 10.5C6.79082 10.5 5 8.70907 5 6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.8297 7.65821C12.9405 7.29159 13 6.90274 13 6.5C13 4.29093 11.2092 2.5 9 2.5C6.79082 2.5 5 4.29093 5 6.5C5 6.90274 5.05952 7.29159 5.17025 7.65821C5.31044 7.65821 5.42163 7.54309 5.44164 7.40434C5.55606 6.61092 6.23958 6 7.06541 6H10.9346C11.7614 6 12.4441 6.61092 12.5584 7.40433C12.5784 7.54309 12.6896 7.65821 12.8297 7.65821Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UserShortHair4;
