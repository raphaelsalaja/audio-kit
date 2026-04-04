import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarHeart({
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
          d="M4.25 2C2.73069 2 1.5 3.23128 1.5 4.75V13.25C1.5 14.7687 2.73069 16 4.25 16H9.90145C9.18686 15.1063 8.5763 13.9347 8.50738 12.4976C8.5005 12.3541 8.49633 12.1746 8.50876 11.9817C8.6239 10.1955 9.99823 8.74083 11.7708 8.53393C12.039 8.50262 12.3166 8.50201 12.5895 8.53403C13.0907 8.59281 13.57 8.75278 14.0005 8.99932C14.4301 8.75302 14.9087 8.59286 15.41 8.53403C15.6838 8.50191 15.9623 8.50254 16.2312 8.53392C16.3219 8.5445 16.4115 8.55835 16.5 8.57534V4.75C16.5 3.23128 15.2693 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.75 2C15.2692 2 16.5 3.23079 16.5 4.75V6H1.5V4.75C1.5 3.23079 2.73079 2 4.25 2H5V0.75C5 0.335786 5.33579 0 5.75 0C6.16421 0 6.5 0.335786 6.5 0.75V2H11.5V0.75C11.5 0.335786 11.8358 0 12.25 0C12.6642 0 13 0.335786 13 0.75V2H13.75Z"
          fill={fill}
        />
        <path
          d="M13.732 17.192C13.902 17.281 14.1 17.281 14.27 17.192C15.167 16.72 18.001 15.011 18.001 12.231C18.005 11.01 17.027 10.016 15.814 10.009C15.084 10.018 14.406 10.389 14.001 11C13.596 10.389 12.917 10.019 12.188 10.009C10.975 10.016 9.99699 11.011 10.001 12.231C10.001 15.011 12.835 16.72 13.732 17.192Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarHeart;
