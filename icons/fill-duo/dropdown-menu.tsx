import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DropdownMenu({
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
          d="M8.6533 11.8984C8.3115 10.9697 8.5342 9.95261 9.2358 9.24701C9.7133 8.76561 10.3496 8.49939 11.0254 8.49939C11.3223 8.49939 11.6152 8.55161 11.896 8.65421L15.5 9.97009V3.74991C15.5 2.23281 14.2666 0.999908 12.75 0.999908H4.75C3.2334 0.999908 2 2.23281 2 3.74991V12.7499C2 14.267 3.2334 15.4999 4.75 15.4999H9.9689L8.6533 11.8984Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.25 8H5.25C4.8359 8 4.5 7.664 4.5 7.25C4.5 6.836 4.8359 6.5 5.25 6.5H8.25C8.6641 6.5 9 6.836 9 7.25C9 7.664 8.6641 8 8.25 8Z"
          fill={fill}
        />
        <path
          d="M12.25 5H5.25C4.8359 5 4.5 4.664 4.5 4.25C4.5 3.836 4.8359 3.5 5.25 3.5H12.25C12.6641 3.5 13 3.836 13 4.25C13 4.664 12.6641 5 12.25 5Z"
          fill={fill}
        />
        <path
          d="M17.3231 12.233L11.3832 10.064L11.3808 10.063C11.0004 9.924 10.5849 10.017 10.2993 10.305C10.0141 10.592 9.9233 11.006 10.0625 11.384L12.2319 17.323C12.3798 17.731 12.7671 18.001 13.1992 18.001H13.2197C13.6601 17.992 14.0464 17.704 14.1801 17.285L14.9325 14.934L17.2821 14.182C17.702 14.048 17.9901 13.663 17.9994 13.222C18.0082 12.781 17.7362 12.383 17.3231 12.233Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DropdownMenu;
