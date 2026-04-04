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
          d="M0.261795 2.45425C0.093495 2.74625 0 3.08145 0 3.42835V6.14615C0 6.83905 0.372095 7.48505 0.971695 7.83315L3.5215 9.31165C3.8233 9.48695 4.1621 9.57485 4.5 9.57485V4.91225L0.261795 2.45425Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.49998 4.91234L8.73808 2.45434C8.57018 2.16334 8.32769 1.91525 8.02829 1.74145L5.47849 0.26295C4.87499 -0.0876501 4.12498 -0.0876501 3.52148 0.26295L0.970688 1.74195C0.671888 1.91555 0.42968 2.16354 0.26178 2.45434L4.49998 4.91234Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M11.0192 10.151C12.8136 9.6837 15.6166 9.5867 16.6056 10.3427C17.2546 10.8377 17.6386 11.8207 17.7496 13.4587C18.0312 17.6127 16.5936 17.7387 13.9586 17.7387H11.0192C9.05592 17.7387 7.76899 16.8471 6.27019 16.0797C5.57366 15.7231 5.1948 14.9095 5.45815 14.1726C5.72557 13.4243 6.55185 13.0376 7.29776 13.3116L9.28239 14.0408L6.86727 8.77984C6.50938 8.00024 6.82721 7.077 7.58914 6.68289C8.40559 6.26059 9.40926 6.60825 9.78955 7.44509L11.0192 10.151Z"
          fill={fill}
        />
        <path
          d="M9 3.42835C9 3.08145 8.90651 2.74625 8.7382 2.45425L4.5 4.91225V9.57485C4.83318 9.57485 5.16724 9.48939 5.46584 9.31894C4.83578 7.8302 5.45474 6.09812 6.90002 5.35056C7.57467 5.00159 8.31544 4.9245 9 5.07692V3.42835Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HandPointingCube;
