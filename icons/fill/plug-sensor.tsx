import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlugSensor({
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
          d="M6.525,6.525c1.317-1.319,3.628-1.32,4.949,0,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061-.943-.943-2.198-1.462-3.535-1.462s-2.593,.52-3.535,1.462c-.293,.293-.293,.768,0,1.061,.293,.293,.768,.293,1.061,0Z"
          fill={fill}
        />
        <path
          d="M9,1C4.589,1,1,4.589,1,9c0,1.783,.58,3.475,1.679,4.893,.253,.327,.724,.388,1.052,.133,.328-.253,.388-.725,.134-1.052-.893-1.152-1.364-2.526-1.364-3.974,0-3.584,2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5c0,1.447-.472,2.822-1.364,3.974-.254,.328-.194,.799,.134,1.052,.137,.106,.298,.157,.458,.157,.225,0,.446-.1,.594-.291,1.099-1.417,1.679-3.109,1.679-4.893,0-4.411-3.589-8-8-8Z"
          fill={fill}
        />
        <path
          d="M11.75,11h-.25v-2c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v2h-2v-2c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v2h-.25c-.689,0-1.25,.561-1.25,1.25v.75c0,2.206,1.794,4,4,4s4-1.794,4-4v-.75c0-.689-.561-1.25-1.25-1.25Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default PlugSensor;
