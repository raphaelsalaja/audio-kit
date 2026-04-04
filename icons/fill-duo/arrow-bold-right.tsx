import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldRight({
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
          d="M16.586 8.00408L10.005 3.01108C9.625 2.72308 9.122 2.67608 8.694 2.88708C8.265 3.10008 8 3.52908 8 4.00708V6.00008H2.75C1.785 6.00008 1 6.78508 1 7.75008V10.2501C1 11.2151 1.785 12.0001 2.75 12.0001H8V13.9931C8 14.4711 8.266 14.9001 8.694 15.1131C8.871 15.2011 9.062 15.2441 9.251 15.2441C9.518 15.2441 9.782 15.1581 10.005 14.9891L16.586 9.99507C16.9 9.75707 17.08 9.39408 17.08 8.99908C17.08 8.60408 16.9 8.24207 16.586 8.00307V8.00408Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldRight;
