import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceEnraged({
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
          d="M11.251 13.7507C11.002 13.7507 10.7588 13.6272 10.6162 13.4016C10.2627 12.8425 9.6582 12.5085 9 12.5085C8.3418 12.5085 7.73729 12.8425 7.38379 13.4016C7.16309 13.7512 6.69921 13.8562 6.34961 13.6345C5.99901 13.4133 5.89451 12.9499 6.11621 12.5998C6.74611 11.6032 7.8242 11.0085 9 11.0085C10.1758 11.0085 11.2539 11.6032 11.8838 12.5998C12.1055 12.9499 12.001 13.4133 11.6504 13.6345C11.5264 13.7131 11.3877 13.7507 11.251 13.7507Z"
          fill={fill}
        />
        <path
          d="M5.5 9.73271C6.269 10.1767 7.21101 10.0517 7.83701 9.4887C8.07801 9.2717 8.00702 8.87071 7.72602 8.70871L5.27399 7.2927C4.99299 7.1307 4.61 7.2687 4.543 7.5867C4.368 8.4107 4.731 9.28871 5.5 9.73271Z"
          fill={fill}
        />
        <path
          d="M12.5 9.73271C11.731 10.1767 10.789 10.0517 10.163 9.4887C9.92198 9.2717 9.99297 8.87071 10.274 8.70871L12.726 7.2927C13.007 7.1307 13.39 7.2687 13.457 7.5867C13.632 8.4107 13.269 9.28871 12.5 9.73271Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceEnraged;
