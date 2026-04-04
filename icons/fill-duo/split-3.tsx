import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Split3({
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
          d="M15.942 2.46301C15.866 2.28001 15.72 2.13401 15.537 2.05701C15.445 2.01901 15.348 1.99902 15.25 1.99902H11C10.586 1.99902 10.25 2.33502 10.25 2.74902C10.25 3.16302 10.586 3.49902 11 3.49902H13.439L10.219 6.71899C9.92599 7.01199 9.92599 7.48703 10.219 7.78003C10.365 7.92603 10.557 8 10.749 8C10.941 8 11.133 7.92703 11.279 7.78003L14.499 4.56006V6.99902C14.499 7.41302 14.835 7.74902 15.249 7.74902C15.663 7.74902 15.999 7.41302 15.999 6.99902V2.75C15.999 2.652 15.98 2.55501 15.942 2.46301Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.561 3.5H7C7.414 3.5 7.75 3.164 7.75 2.75C7.75 2.336 7.414 2 7 2H2.75C2.336 2 2 2.336 2 2.75V7C2 7.414 2.336 7.75 2.75 7.75C3.164 7.75 3.5 7.414 3.5 7V4.56104L7.884 8.94495C8.12 9.18095 8.25 9.49498 8.25 9.82898V16.25C8.25 16.664 8.586 17 9 17C9.414 17 9.75 16.664 9.75 16.25V9.82898C9.75 9.09398 9.464 8.40403 8.944 7.88403L4.561 3.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Split3;
