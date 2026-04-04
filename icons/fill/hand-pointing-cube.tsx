import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandPointingCube({
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
          d="M11.0192 10.151C12.8136 9.6837 15.6166 9.5867 16.6056 10.3427C17.2546 10.8377 17.6386 11.8207 17.7496 13.4587C18.0312 17.6127 16.5936 17.7387 13.9586 17.7387H11.0192C9.05592 17.7387 7.76899 16.8471 6.27019 16.0797C5.57366 15.7231 5.1948 14.9095 5.45815 14.1726C5.72557 13.4243 6.55185 13.0376 7.29776 13.3116L9.28239 14.0408L6.86727 8.77984C6.50938 8.00024 6.82721 7.077 7.58914 6.68289C8.40559 6.26059 9.40926 6.60825 9.78955 7.44509L11.0192 10.151Z"
          fill={fill}
        />
        <path
          d="M8.739 2.456C8.571 2.167 8.327 1.915 8.029 1.743L5.479 0.263004C4.875 -0.0869965 4.125 -0.0869965 3.522 0.263004L0.972002 1.742C0.675002 1.914 0.434002 2.16 0.266002 2.449C0.0980016 2.741 0.00100157 3.082 0.00100157 3.429V6.396C0.00100157 7.089 0.373002 7.735 0.973002 8.083L3.523 9.562C3.821 9.734 4.159 9.825 4.502 9.825C4.916 9.825 5.252 9.489 5.252 9.075V5.344L7.502 4.039V4.249C7.502 4.663 7.838 4.999 8.252 4.999C8.666 4.999 9.002 4.663 9.002 4.249V3.428C9.002 3.081 8.907 2.748 8.739 2.456ZM1.725 6.786C1.586 6.705 1.5 6.557 1.5 6.396V4.039L3.75 5.344V7.96L1.725 6.786Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default HandPointingCube;
