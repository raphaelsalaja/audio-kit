import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flag6({
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
          d="M15.898,6.873c-.156-.27-.464-.414-.771-.363-1.377,.229-2.556,.087-3.501-.421-.694-.373-1.085-.839-1.537-1.379-.477-.569-1.017-1.214-1.951-1.739-1.159-.651-2.558-.888-4.138-.738V11.3c.077-.027,.151-.067,.217-.119,.694-.552,1.425-.881,2.171-.979,.847-.11,1.446,.105,2.14,.355,.561,.201,1.141,.41,1.855,.441,1.788,.088,3.618-1.022,5.449-3.276,.197-.242,.223-.581,.066-.85Z"
          fill={fill}
        />
        <path
          d="M3.75,17c-.414,0-.75-.336-.75-.75V1.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v14.5c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Flag6;
