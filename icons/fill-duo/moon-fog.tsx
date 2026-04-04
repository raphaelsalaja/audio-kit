import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoonFog({
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
          d="M8.54419 0.975556C8.70875 1.23336 8.70028 1.56526 8.52278 1.81434C7.88003 2.71631 7.5 3.81238 7.5 5.00108C7.5 8.03887 9.96222 10.5011 13 10.5011C14.0509 10.5011 15.029 10.202 15.8667 9.68787C16.1275 9.52781 16.4594 9.54226 16.7053 9.72437C16.9513 9.90648 17.0619 10.2197 16.9848 10.5159C16.0904 13.9546 12.9735 16.5011 9.25 16.5011C4.83179 16.5011 1.25 12.9193 1.25 8.50109C1.25 4.58562 4.06262 1.33474 7.77437 0.641821C8.07502 0.585695 8.37963 0.717752 8.54419 0.975556Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 13.25C1 12.8358 1.33579 12.5 1.75 12.5H10.25C10.6642 12.5 11 12.8358 11 13.25C11 13.6642 10.6642 14 10.25 14H1.75C1.33579 14 1 13.6642 1 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8 16.25C8 15.8358 8.33579 15.5 8.75 15.5H14.25C14.6642 15.5 15 15.8358 15 16.25C15 16.6642 14.6642 17 14.25 17H8.75C8.33579 17 8 16.6642 8 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.5 16.25C3.5 15.8358 3.83579 15.5 4.25 15.5H5.75C6.16421 15.5 6.5 15.8358 6.5 16.25C6.5 16.6642 6.16421 17 5.75 17H4.25C3.83579 17 3.5 16.6642 3.5 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MoonFog;
