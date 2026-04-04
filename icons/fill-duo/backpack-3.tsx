import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Backpack3({
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
          d="M2.5 9.5C2.5 5.90979 5.40979 3 9 3C12.5902 3 15.5 5.90979 15.5 9.5V14.25C15.5 15.7692 14.2692 17 12.75 17H5.25C3.73079 17 2.5 15.7692 2.5 14.25V9.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path d="M5.5 12V17H12.5V12H5.5Z" fill={fill} />
        <path
          d="M7.5 2.25C7.5 1.83581 7.83581 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83581 10.5 2.25V3.17389C11.0278 3.29853 11.5307 3.48749 12 3.73206V2.25C12 1.00739 10.9926 0 9.75 0H8.25C7.00739 0 6 1.00739 6 2.25V3.73206C6.46931 3.48749 6.97222 3.29853 7.5 3.17389V2.25Z"
          fill={fill}
        />
        <path
          d="M5.5 10.5H12.5C12.5 8.56699 10.933 7 9 7C7.06699 7 5.5 8.56699 5.5 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Backpack3;
