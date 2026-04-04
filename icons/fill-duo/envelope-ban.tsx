import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeBan({
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
          d="M1 5.25C1 3.73079 2.23079 2.5 3.75 2.5H14.25C15.7692 2.5 17 3.73079 17 5.25V9.38942C16.1372 8.8269 15.1068 8.5 14 8.5C10.9624 8.5 8.5 10.9624 8.5 14C8.5 14.52 8.57216 15.0232 8.70702 15.5H3.75C2.23079 15.5 1 14.2692 1 12.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.9689 4.83458L9.84534 8.76513C9.31888 9.05549 8.68127 9.05557 8.15481 8.76521L1.03104 4.83535C1.23087 3.513 2.37174 2.5 3.75001 2.5H14.25C15.628 2.5 16.7687 3.5126 16.9689 4.83458Z"
          fill={fill}
        />
        <path
          d="M14 10C11.7908 10 10 11.7908 10 14C10 16.2092 11.7908 18 14 18C16.2092 18 18 16.2092 18 14C18 11.7908 16.2092 10 14 10ZM11.5 14C11.5 12.6192 12.6192 11.5 14 11.5C14.4172 11.5 14.8106 11.6022 15.1564 11.7829L11.7829 15.1564C11.6022 14.8106 11.5 14.4172 11.5 14ZM12.8436 16.2171C13.1894 16.3978 13.5828 16.5 14 16.5C15.3808 16.5 16.5 15.3808 16.5 14C16.5 13.5828 16.3978 13.1894 16.2171 12.8436L12.8436 16.2171Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default EnvelopeBan;
