import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagicShield({
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
          d="m9.8445,2.2661c-.5903-.2769-1.2779-.2649-1.8485.0659l-4.249,2.4648c-.617.3582-.997,1.0171-.997,1.73v4.946c0,.7131.38,1.3721.997,1.7302l4.25,2.4648c.621.3601,1.386.3601,2.007,0l4.25-2.4648c.617-.3582.997-1.0171.997-1.7302h-.001v-3.0593"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9.8445,2.2661c-.5903-.2769-1.2779-.2649-1.8485.0659l-4.249,2.4648c-.617.3582-.997,1.0171-.997,1.73v4.946c0,.7131.38,1.3721.997,1.7302l4.25,2.4648c.621.3601,1.386.3601,2.007,0l4.25-2.4648c.617-.3582.997-1.0171.997-1.7302h-.001v-3.0593"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m16.159,3.49l-1.263-.421-.421-1.2629c-.137-.408-.812-.408-.949,0l-.421,1.2629-1.263.421c-.204.068-.342.259-.342.474s.138.406.342.474l1.263.421.421,1.263c.068.204.26.342.475.342s.406-.138.475-.342l.421-1.263,1.263-.421c.204-.068.342-.259.342-.474s-.139-.406-.343-.474Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9,5.75l.671,2.579,2.579.671-2.579.671-.671,2.579-.671-2.579-2.579-.671,2.579-.671.671-2.579Z"
          fill={secondaryfill}
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MagicShield;
