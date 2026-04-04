import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Backpack({
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
          d="M7.5 3C7.5 2.17121 8.17121 1.5 9 1.5C9.82879 1.5 10.5 2.17121 10.5 3H10.75C11.1826 3 11.6017 3.05784 12 3.16621V3C12 1.34279 10.6572 0 9 0C7.34279 0 6 1.34279 6 3V3.16621C6.39829 3.05784 6.81739 3 7.25 3H7.5Z"
          fill={fill}
        />
        <path
          d="M7.25 3C4.62679 3 2.5 5.12679 2.5 7.75V14.25C2.5 15.7692 3.73079 17 5.25 17H12.75C14.2692 17 15.5 15.7692 15.5 14.25V7.75C15.5 5.12679 13.3732 3 10.75 3H7.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path d="M12.5 17H5.5V12.481L12.5 12.481V17Z" fill={fill} />
        <path
          d="M12.5 10.981L5.5 10.981V10.75C5.5 9.23079 6.73079 8 8.25 8H9.75C11.2692 8 12.5 9.23079 12.5 10.75V10.981Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Backpack;
