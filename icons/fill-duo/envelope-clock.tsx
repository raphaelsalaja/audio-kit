import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeClock({
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
          d="M1 5.25C1 3.73079 2.23079 2.5 3.75 2.5H14.25C15.7692 2.5 17 3.73079 17 5.25V9.39123C16.1369 8.82773 15.1063 8.5 14 8.5C10.9654 8.5 8.5 10.9661 8.5 14C8.5 14.5199 8.57238 15.023 8.70761 15.5H3.75C2.23079 15.5 1 14.2692 1 12.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14 10C11.7939 10 10 11.7944 10 14C10 16.2056 11.7939 18 14 18C16.2061 18 18 16.2056 18 14C18 11.7944 16.2061 10 14 10ZM16.3125 14.9502C16.1934 15.2398 15.9141 15.415 15.6191 15.415C15.5234 15.415 15.4277 15.3969 15.3339 15.3588L13.7148 14.6938C13.4336 14.5781 13.25 14.3042 13.25 14V12.25C13.25 11.8359 13.5859 11.5 14 11.5C14.4141 11.5 14.75 11.8359 14.75 12.25V13.4971L15.9043 13.9712C16.2871 14.1284 16.4707 14.5669 16.3125 14.9502Z"
          fill={fill}
        />
        <path
          d="M16.9689 4.83458L9.84534 8.76513C9.31888 9.05549 8.68127 9.05557 8.15481 8.76521L1.03104 4.83535C1.23087 3.513 2.37174 2.5 3.75001 2.5H14.25C15.628 2.5 16.7687 3.5126 16.9689 4.83458Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeClock;
