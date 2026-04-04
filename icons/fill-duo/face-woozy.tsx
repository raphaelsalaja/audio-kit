import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceWoozy({
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
          d="M9 17.0007C4.5889 17.0007 1 13.4118 1 9.0007C1 4.5896 4.5889 1.0007 9 1.0007C13.4111 1.0007 17 4.5896 17 9.0007C17 13.4118 13.4111 17.0007 9 17.0007Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6 10.0007C6.5523 10.0007 7 9.5527 7 9.0007C7 8.4487 6.5523 8.0007 6 8.0007C5.4477 8.0007 5 8.4487 5 9.0007C5 9.5527 5.4477 10.0007 6 10.0007Z"
          fill={fill}
        />
        <path
          d="M11.5 10.0007C12.3284 10.0007 13 9.3287 13 8.5007C13 7.6727 12.3284 7.0007 11.5 7.0007C10.6716 7.0007 10 7.6727 10 8.5007C10 9.3287 10.6716 10.0007 11.5 10.0007Z"
          fill={fill}
        />
        <path
          d="M7.99999 13.3278C7.44579 13.3278 6.89159 13.1169 6.46969 12.695C6.17669 12.402 6.17669 11.9274 6.46969 11.6345C6.76269 11.3416 7.23729 11.3415 7.53019 11.6345C7.78899 11.8933 8.21089 11.8933 8.46969 11.6345C9.28609 10.8171 10.7134 10.8171 11.5307 11.6345C11.8232 11.9275 11.8232 12.4026 11.5302 12.6955C11.2372 12.9875 10.7621 12.988 10.4692 12.695C10.2192 12.444 9.78069 12.444 9.53069 12.695C9.10829 13.1169 8.55419 13.3278 7.99999 13.3278Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceWoozy;
