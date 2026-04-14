import React, { ReactElement } from 'react';
// import { Props as SVGPanZoomProps } from 'react-svg-pan-zoom';

export type ParticipantType = {
  id: string | number;

  isWinner?: boolean;

  name?: string;

  status?: 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | string | null;

  resultText?: string | null;

  [key: string]: any;
};

export type MatchType = {
  id: number | string;

  /** Link to this match. While onClick() can be used, providing an href
      better supports opening a new tab, or copying a link. * */
  href?: string;

  onMatchClick?: (args: {
    match: MatchType;
    topWon: boolean;
    bottomWon: boolean;
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
  }) => void;

  name?: string;

  nextMatchId: number | string | null;

  nextLooserMatchId?: number | string;

  tournamentRoundText?: string;

  startTime: string;

  state: 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | string;

  participants: ParticipantType[];

  [key: string]: any;
};

export type OptionsType = {
  width?: number;

  boxHeight?: number;

  canvasPadding?: number;

  spaceBetweenColumns?: number;

  spaceBetweenRows?: number;

  connectorColor?: string;

  connectorColorHighlight?: string;

  roundHeader?: {
    isShown?: boolean;
    height?: number;
    marginBottom?: number;
    fontSize?: number;
    fontColor?: string;
    backgroundColor?: string;
    fontFamily?: string;
    roundTextGenerator?: (
      currentRoundNumber: number,
      roundsTotalNumber: number
    ) => string | undefined;
  };

  roundSeparatorWidth?: number;

  lineInfo?: {
    separation?: number;
    homeVisitorSpread?: number;
  };

  horizontalOffset?: number;

  wonBywalkOverText?: string;

  lostByNoShowText?: string;

  /** Optional label used for the action link in the default match component. */
  matchDetailsText?: string;

  /** Optional inline style for the action link in the default match component. */
  matchDetailsClassname?: string;

};

export type ComputedOptionsType = OptionsType & {
  rowHeight?: number;

  columnWidth?: number;
};

export type SvgViewerProps = {
  height: number;

  width: number;

  bracketWidth: number;

  bracketHeight: number;

  children: ReactElement;

  startAt: number[];

  scaleFactor: number;
};

export type MatchComponentProps = {
  match: MatchType;

  onPartyClick: (party: ParticipantType, partyWon: boolean) => void;

  onMouseEnter: (partyId: string | number) => void;

  onMouseLeave: () => void;

  topParty: ParticipantType;

  bottomParty: ParticipantType;

  topWon: boolean;

  bottomWon: boolean;

  topHovered: boolean;

  bottomHovered: boolean;

  topText: string;

  bottomText: string;

  /** Optional label used for the action link in the default match component. */
  matchDetailsText?: string;

  /** Optional inline style for the action link in the default match component. */
  matchDetailsClassname?: string;

  connectorColor?: string;

  computedStyles?: ComputedOptionsType;

  teamNameFallback: string;

  resultFallback: (participant: ParticipantType) => string;
};

export type ThemeType = {
  fontFamily: string;

  transitionTimingFunction: string;

  disabledColor: string;

  roundHeaders: {
    background: string;
  };

  matchBackground: {
    wonColor: string;
    lostColor: string;
  };

  border: {
    color: string;
    highlightedColor: string;
  };

  textColor: {
    highlighted: string;
    main: string;
    dark: string;
    disabled: string;
  };

  score: {
    text: {
      highlightedWonColor: string;
      highlightedLostColor: string;
    };
    background: {
      wonColor: string;
      lostColor: string;
    };
  };

  canvasBackground: string;
};

export type CommonTreeProps = {
  svgWrapper?: (props: {
    bracketWidth: number;
    bracketHeight: number;
    startAt: number[];
    children: ReactElement;
  }) => React.ReactElement;

  theme?: ThemeType;

  options?: { style: OptionsType };
};

export type BracketLeaderboardProps = CommonTreeProps & {
  matchComponent: (props: MatchComponentProps) => JSX.Element;

  currentRound?: string;

  onPartyClick?: (party: ParticipantType, partyWon: boolean) => void;
};

export type SingleElimLeaderboardProps = BracketLeaderboardProps & {
  matches: MatchType[];
};

export type DoubleElimLeaderboardProps = BracketLeaderboardProps & {
  matches: { upper: MatchType[]; lower: MatchType[] };
};
