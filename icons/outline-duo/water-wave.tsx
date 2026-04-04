import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WaterWave({
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
          d="M2.43181 10.383C2.42423 10.383 2.41662 10.383 2.409 10.383H16.25V11H1.75V10.383L2.43181 10.383ZM2.43181 10.383L16.249 10.382H15.59C11.636 10.382 10.921 5.372 13.659 4.881C13.268 4.39 10.776 1.763 8.021 4.063C7.03451 4.88711 6.56744 6.04019 6.12351 7.13616C5.44056 8.82223 4.81236 10.3731 2.43181 10.383Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M1.75 14.25C3.15 14.254 4.479 13.634 5.375 12.558C7.053 14.56 10.036 14.823 12.038 13.145C12.25 12.967 12.447 12.771 12.625 12.558C13.519 13.636 14.849 14.257 16.25 14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 10.383H2.409C6.363 10.383 5.512 6.159 8.021 4.063C10.776 1.763 13.268 4.39 13.659 4.881C10.921 5.372 11.636 10.382 15.59 10.382H16.249"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default WaterWave;
