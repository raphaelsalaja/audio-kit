import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayerFront({
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
          d="M9,16.496c-.281,0-.561-.067-.817-.203l-5.869-3.09c-.495-.261-.801-.77-.801-1.328,0-.414,.336-.75,.75-.75s.75,.336,.75,.75l5.871,3.091c.073,.039,.16,.039,.231,0l5.871-3.091c0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,.558-.307,1.066-.8,1.327l-5.871,3.091c-.255,.135-.535,.202-.815,.202Z"
          fill={fill}
        />
        <path
          d="M15.687,7.297l-4.437-2.336v3.289c0,1.241-1.009,2.25-2.25,2.25s-2.25-1.009-2.25-2.25v-3.288L2.315,7.297c-.494,.26-.801,.769-.801,1.327s.307,1.067,.801,1.327l5.869,3.09c.256,.135,.536,.203,.817,.203s.56-.067,.815-.202l5.87-3.091c.494-.26,.801-.769,.801-1.327s-.307-1.067-.801-1.327Z"
          fill={fill}
        />
        <path
          d="M11.78,2.47L9.53,.22c-.293-.293-.768-.293-1.061,0l-2.25,2.25c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l.97-.97v5.689c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V2.561l.97,.97c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default LayerFront;
