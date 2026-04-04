import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CheckboxChecked({
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
          d="M13.2501 2H4.75009C3.23131 2 2.00009 3.23122 2.00009 4.75V13.25C2.00009 14.7688 3.23131 16 4.75009 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.00011 12.5C7.78771 12.5 7.58511 12.4102 7.44251 12.252L5.19251 9.752C4.91561 9.4439 4.94051 8.9698 5.24821 8.6924C5.55681 8.4165 6.02991 8.44 6.30781 8.7481L7.95621 10.5801L11.6569 5.79151C11.9098 5.46341 12.3815 5.40329 12.7087 5.65669C13.0363 5.90959 13.0969 6.3808 12.8435 6.7085L8.59351 12.2085C8.45781 12.3848 8.25071 12.4912 8.02861 12.4995C8.01881 12.5 8.00941 12.5 8.00011 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CheckboxChecked;
