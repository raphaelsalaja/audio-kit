import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDotRotateAnticlockwise({
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
          d="M9,1c-2.48,0-4.765,1.156-6.261,3.042l-.116-.84c-.057-.411-.433-.7-.846-.64-.41,.057-.697,.435-.64,.846l.408,2.945c.052,.375,.373,.647,.742,.647,.034,0,.069-.002,.104-.007l2.944-.407c.411-.057,.697-.436,.641-.846-.058-.411-.441-.694-.846-.641l-1.458,.202c1.2-1.727,3.174-2.801,5.329-2.801,3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5c-.3,0-.602-.021-.898-.062-.41-.05-.789,.23-.845,.641-.056,.41,.23,.789,.641,.845,.363,.05,.734,.075,1.102,.075,4.411,0,8-3.589,8-8S13.411,1,9,1Z"
          fill={fill}
        />
        <circle cx="3.75" cy="13.75" fill={secondaryfill} r="2.75" />
      </g>
    </svg>
  );
}

export default ArrowDotRotateAnticlockwise;
