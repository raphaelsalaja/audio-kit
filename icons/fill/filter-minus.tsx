import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilterMinus({
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
          d="M10.5 11.75C10.5 11.3358 10.8358 11 11.25 11H16.25C16.6642 11 17 11.3358 17 11.75C17 12.1642 16.6642 12.5 16.25 12.5H11.25C10.8358 12.5 10.5 12.1642 10.5 11.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M2.75 2C2.46853 2 2.21075 2.15761 2.08245 2.40814C1.95414 2.65868 1.97693 2.95996 2.14144 3.18835L7 9.9334V16.0325C7 16.2894 7.13144 16.5284 7.34835 16.6659C7.56526 16.8035 7.83747 16.8205 8.0698 16.7109L10.5737 15.6387C10.8363 15.5149 11.0039 15.2507 11.0039 14.9603V13.9867C9.87702 13.8641 9 12.9095 9 11.75C9 10.5074 10.0074 9.5 11.25 9.5H11.3157L15.8587 3.18813C16.0231 2.95972 16.0458 2.65849 15.9175 2.40802C15.7892 2.15755 15.5314 2 15.25 2H2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FilterMinus;
