import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMinimizeDiagonal2({
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
          d="M15.146 9.5H10.5C9.949 9.5 9.5 9.949 9.5 10.5V15.146C9.5 15.552 9.742 15.915 10.117 16.07C10.242 16.122 10.372 16.147 10.501 16.147C10.761 16.147 11.015 16.045 11.207 15.854L15.853 11.208C16.14 10.921 16.225 10.493 16.07 10.118C15.915 9.74298 15.552 9.5 15.146 9.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.88301 1.92996C7.50801 1.77296 7.08001 1.85994 6.79301 2.14694L2.14601 6.793C1.85901 7.08 1.77401 7.50797 1.92901 7.88297C2.08401 8.25797 2.447 8.49997 2.853 8.49997H7.50001C8.05101 8.49997 8.50001 8.05097 8.50001 7.49997V2.85398C8.50001 2.44798 8.25801 2.08496 7.88301 1.92996Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CaretMinimizeDiagonal2;
