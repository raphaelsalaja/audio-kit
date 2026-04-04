import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pin({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M9.99309 2.50293L7.91699 3.91232L10.9409 4.90324L13.2886 6.65476L14.9071 9.37863L16.1954 12.1329L16.5261 15.283L15.9451 18.3399L17.6498 17.3876L19.0306 15.1401L18.7286 10.6763L17.238 6.98691L13.9958 3.4466L11.9623 2.7618L9.99309 2.50293Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M6.38237 4.677C3.99452 6.25186 3.92133 10.799 6.2189 14.8333L10.1148 21.6742C10.2579 21.9253 10.5834 22.0033 10.8246 21.8442L14.7026 19.2865C17.0904 17.7117 17.1636 13.1646 14.8661 9.13026C12.5685 5.09594 8.77022 3.10215 6.38237 4.677Z"
          stroke={fill}
        />
        <path
          d="M13.0755 20.3614L17.2555 17.6484C19.6433 16.0735 19.7165 11.5264 17.419 7.49207C15.1214 3.45775 11.3231 1.46397 8.93526 3.03882L8.57279 3.27129L7.84784 3.73597L6.39795 4.66534"
          stroke={fill}
        />
        <path
          d="M8.44321 10.4884C8.50068 9.16005 9.48713 8.59788 10.6465 9.23279C11.8059 9.86771 12.6991 11.4593 12.6417 12.7877C12.5842 14.1161 11.5977 14.6782 10.4384 14.0433C9.27899 13.4084 8.38573 11.8168 8.44321 10.4884Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Pin;
