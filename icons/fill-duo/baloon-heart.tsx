import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BaloonHeart({
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
          d="M12.051 1C10.9 1.015 9.813 1.464 9 2.237C8.187 1.465 7.097 1.015 5.936 1C3.481 1.015 1.492 3.002 1.5 5.428C1.5 10.46 6.628 13.494 8.202 14.305C8.452 14.434 8.726 14.499 9 14.499C9.274 14.499 9.547 14.435 9.797 14.306C11.369 13.496 16.5 10.461 16.5 5.431C16.509 3.002 14.519 1.014 12.051 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.13663 14.2711C8.15905 14.2828 8.18084 14.2941 8.202 14.305C8.452 14.434 8.726 14.499 9 14.499C9.25328 14.499 9.5057 14.4443 9.73989 14.3341C9.79678 14.8711 9.61958 15.4281 9.20891 15.8398L8.83515 16.2175C8.6982 16.3541 8.69389 16.5812 8.83234 16.7197C9.12523 17.0126 9.12523 17.4874 8.83234 17.7803C8.53945 18.0732 8.06457 18.0732 7.77168 17.7803C7.04877 17.0574 7.04724 15.8845 7.77036 15.161L8.14667 14.7807C8.29279 14.6345 8.27371 14.4134 8.13663 14.2711Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BaloonHeart;
