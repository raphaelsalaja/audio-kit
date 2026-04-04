import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicPlaylist2({
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
          d="M16.124,5.6c-2.289-1.316-3.713-3.705-3.728-3.729-.171-.291-.518-.435-.844-.343-.326,.089-.553,.385-.553,.723V10.52c-.506-.326-1.105-.52-1.75-.52-1.792,0-3.25,1.458-3.25,3.25s1.458,3.25,3.25,3.25,3.25-1.458,3.25-3.25V4.499c.715,.805,1.687,1.717,2.876,2.401,.359,.205,.818,.083,1.024-.276s.083-.818-.276-1.024Z"
          fill={fill}
        />
        <path
          d="M2.25,4.5h6c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H2.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M7.25,7.25c0-.414-.336-.75-.75-.75H2.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H6.5c.414,0,.75-.336,.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MusicPlaylist2;
