import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareXmark({
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
          d="M12.2804 5.71975C11.9874 5.42675 11.5128 5.42675 11.2199 5.71975L9.00019 7.93948L6.7805 5.71975C6.4875 5.42675 6.01289 5.42675 5.71999 5.71975C5.42709 6.01275 5.42699 6.48727 5.71999 6.78017L7.93969 8.9999L5.71999 11.2196C5.42699 11.5126 5.42699 11.9873 5.71999 12.2802C5.86649 12.4267 6.05839 12.4998 6.25029 12.4998C6.44219 12.4998 6.63409 12.4267 6.78059 12.2802L9.00029 10.0604L11.22 12.2802C11.3665 12.4267 11.5584 12.4998 11.7503 12.4998C11.9422 12.4998 12.1341 12.4267 12.2806 12.2802C12.5736 11.9872 12.5736 11.5125 12.2806 11.2196L10.0609 8.9999L12.2806 6.78017C12.5736 6.48717 12.5734 6.01265 12.2804 5.71975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareXmark;
